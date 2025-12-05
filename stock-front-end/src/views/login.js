import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import usePost from 'hooks/usePost'
import { get } from 'lodash'
import { useStoreActions } from 'easy-peasy'
import Icon from 'assets/images/SiamStarch.png'

const LoginView = (props) => {
    const setAppLoading = useStoreActions((actions) => actions.app.setAppLoading)
    const openToast = useStoreActions((actions) => actions.toast.openToast)
    const setUser = useStoreActions((actions) => actions.user.setUser)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const { onPost } = usePost('/api/v1/auth/login')

    const loginFn = () => {
        if (loading) return
        setLoading(true)
        setAppLoading(true)
        onPost({
            variables: {
                username,
                password
            },
            onDone: (res) => {
                if (get(res, 'statusCode', '') === 200) {
                    setLoading(false)
                    setAppLoading(false)
                    setUser({
                        token: get(res, 'result.accessToken'),
                        refreshToken: get(res, 'result.refreshToken')
                    })
                    props.history.push('/')
                } else {
                    setLoading(false)
                    setAppLoading(false)
                    openToast({
                        message: get(res, 'error', ''),
                        timeout: 2500
                    })
                }
            },
            onError: (e) => {
                console.log('onError ==>', e)
                setLoading(false)
                setAppLoading(false)
                openToast({
                    message: get(e, 'response.data.message', '') || 'Network error please try again later.',
                    timeout: 2500
                })
            }
        })
    }
    return (
        <>
            <div className="header-mobile">
                <h1>
                    {'NK'}
                </h1>
            </div>
            <main className="container-login-form">
                <div className="login-form">
                    <img src={Icon} style={{ maxWidth: '100px' }} />
                    <h1>{'LOGIN'}</h1>
                    <input
                        autoComplete="off"
                        type="text"
                        value={username}
                        placeholder="Operator"
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <input
                        autoComplete="off"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <div className="btn-submit"
                        onClick={() => {
                            loginFn()
                        }}
                    >
                        Login
                    </div>
                </div>
            </main>
        </>
    )
}

export default withRouter(LoginView)
