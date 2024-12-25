import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { blogUpdated, selectBlogById } from "../reducers/blogSlice";

const EditBlogForm = () => {
    const {blogId} = useParams();
    const blog = useSelector((state) => selectBlogById(state, blogId));

    const [title, setTitle] = useState(blog.title);
    const [content, setContent] = useState(blog.content);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onTitleChange = (e) =>{setTitle(e.target.value)};
    const onContentChange = (e) => setContent(e.target.value);

    const handleSubmitForm = () =>{
        if(title && content) {
            dispatch(blogUpdated({id: blogId, title, content}));
            navigate(`/blogs/${blogId}`);
        }
    }

    if(!blog) {
        return (
            <section>
                <h2>پستی یافت نشد...</h2>
            </section>
        )
    }

    return (
        <section>
            <h2>ویرایش پست</h2>
            <form autoComplete="off">
                <label htmlFor="blogTitle">عنوان پست :</label>
                <input type="text" id="blogTitle" name="blogTitle" value={title} onChange={(event) => onTitleChange(event)}/>
                <label htmlFor="blogContent">محتوای اصلی :</label>
                <textarea id="blogContent" name="blogContent" value={content} onChange={(event) => onContentChange(event)}/>
                <button type="button" onClick={handleSubmitForm}>ویرایش پست</button>
            </form>
        </section>
    )
}

export default EditBlogForm;