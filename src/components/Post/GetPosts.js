import { Button, Card } from 'antd';
const Post = ({ id, title, body, deletePost }) => (
  <Card className='ant-card-head'>
    <h1>{title}</h1>
    <hr/>
    <p>{body}</p>
    <Button onClick={() => deletePost(id)} type='primary'>Удалить</Button>
    <hr/>
  </Card>
)

export default Post;