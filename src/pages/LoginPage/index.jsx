import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../../contexts/AuthContext"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import api from "../../core/Api"
export default function LoginPage() {
    // https://dontpad.com/fs60/aula30
    const { login } = useContext(AuthContext)
    const navigation = useNavigate()
    async function realizarLogin(values) {
        const data = {
            username: values.login,
            password: values.password,
            expiresInMins: 30
        }
        const response = await api.post('auth/login', data)
        navigation('/')
        login(response.data)
    }

    const validacaoForm = Yup.object({
        login: Yup.string().required('Campo Obrigatorio'),
        password: Yup.string().required('Campo Obrigatorio')
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <div className="card p-3 mt-5">
                            <Formik
                                enableReinitialize
                                initialValues={{
                                    login: '',
                                    password: ''
                                }}
                                onSubmit={realizarLogin}
                                validationSchema={validacaoForm}
                            >
                                <Form>
                                    <div>
                                        <img src="" alt="" />
                                        <h3 className="text-center">Sistema DC</h3>
                                    </div>
                                    <div className="mt-3">
                                        <label>Login</label>
                                        <Field id="login" name="login" className="form-control" />
                                        <div className="error">
                                            <ErrorMessage name="login" />
                                        </div>
                                    </div>
                                    <div  className="mt-3">
                                        <label>Senha</label>
                                        <Field id="password" name="password" type="password" className="form-control" />
                                        <div className="error">
                                            <ErrorMessage name="password" />
                                        </div>
                                    </div>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <div>
                                            <a href="">Esqueceu sua senha?</a>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary">
                                                Acessar
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}