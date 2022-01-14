import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import {createPost as createPostAction} from '../../redux/modules/posts'
const CreatePost = ({createPost}) => {
    const onSubmit = (values) => {
        createPost(values)

    }

    return (
        <Form
            name="basic"
            onFinish={onSubmit}
        >
            <Form.Item
                label="Заголовок"
                name="title"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Сообщение"
                name="body"
            >
                <Input />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Отправить
                </Button>
            </Form.Item>
        </Form>
    )
}
export default connect(
    null,
    {
        createPost: createPostAction,
    }
) (CreatePost);