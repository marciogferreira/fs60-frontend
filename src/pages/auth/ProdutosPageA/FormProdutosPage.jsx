import { Formik, Form, Field, ErrorMessage } from 'formik'
import api from '../../../core/Api'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'

function FormProdutosPage() {

    const params = useParams()
    const navigate = useNavigate()
    const[data, setData] = useState({
        title: '',
        description: ''
    })

    // https://dontpad.com/fs60/aula30
    async function salvarProduto(values) {
        if(params.id) {
            // Edicao
            await api.put(`products/${params.id}`, values)
            alert("Produto atualizado com sucesso.")
        } else {
            // Criacao
            await api.post('products/add', values)
            alert("Produto criado com sucesso.")
        }
        navigate('/produtos')
    }

    const schemaValidationProduct = Yup.object({
        title: Yup.string().required('Campo obrigatório')
        .min(3, 'O campo deve conter no minimo 3 caracteres'),
        description: Yup.string().required('Campo obrigatório')
    })

    async function consultarProduto() {
        const response = await api.get(`products/${params.id}`)
        setData(response.data)
    }

    useEffect(() => {
        if(params.id) {
            consultarProduto()
        }
    }, [params])

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={data}
                validationSchema={schemaValidationProduct}
                onSubmit={salvarProduto} 
            >
                <Form>
                    <div>
                        <label htmlFor="title">Título</label>
                        <Field 
                            id='title'
                            name='title'
                            type="text" 
                            className='form-control' 
                        />
                        <span className='error'>
                            <ErrorMessage name="title" />
                        </span>
                    </div>
                    <div>
                        <label htmlFor="description">Descricao</label>
                        <Field 
                            as="textarea"
                            id='description'
                            name='description'
                            type="text" 
                            className='form-control' 
                        />
                        <span className='error'>
                            <ErrorMessage name="description" />
                        </span>
                    </div>
                    <button className='btn btn-success'>
                        Salvar
                    </button>
                </Form>
            </Formik>
        </>
    )
}

export default FormProdutosPage