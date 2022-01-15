import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createPost as createPostAction } from '../../redux/modules/posts'
import './CreatePost.css'
const CreatePost = ({ createPost }) => {
    const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm({mode: 'onBlur'});
    const onSubmit = (values) => {
        createPost(values)
        reset()
    }
    return (
        <div className='container'>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='InputTitle'>
                    <label>Ваш заголовок поста: </label>
                    <hr/>
                    <input className='input1' type="text" placeholder="Заголовок"{...register("title", { required: true })} />
                    <div style={{ color: "red", fontSize: "15px" }}>{errors?.title && <p>Поля не могут быть пустыми!</p>}</div>
                </div>
                <div className='InputBody'>
                <label>Ваш текст поста: </label>
                <hr/>
                    <textarea className='input2' type="text" placeholder="Текст" {...register("body", { required: true })} />
                    <div style={{ color: "red", fontSize: "15px" }}>{errors?.body && <p>Поля не могут быть пустыми!</p>}</div>
                </div>
                <input type="submit" disabled={!isValid} />
            </form>
        </div>
    )
}
export default connect(
    null,
    {
        createPost: createPostAction,
    }
)(CreatePost);