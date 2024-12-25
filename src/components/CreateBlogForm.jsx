import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogAdded } from "../reducers/blogSlice";
import {useNavigate} from "react-router-dom";

const CreateBlogForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(state => state.users);

    const onTitleChange = (e) =>{setTitle(e.target.value)};
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = e => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean);

    const handleSubmitForm = () => {
        if(canSave) {
            dispatch(blogAdded(title, content, userId));

            setTitle("");
            setContent("");
            setUserId("");
            navigate("/");
        }
    }

    return (
        <section>
            <h2>ساخت پست جدید</h2>
            <form autoComplete="off">
                <label htmlFor="blogTitle">عنوان پست :</label>
                <input type="text" id="blogTitle" name="blogTitle" value={title} onChange={(event) => onTitleChange(event)}/>
                <label htmlFor="blogAuthor">نویسنده :</label>
                <select id="blogAuthor" value={userId} onChange={(event) => onAuthorChange(event)}>
                    <option value="">انتخاب نویسنده</option>
                    {
                        users.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.fullname}
                            </option>
                        ))
                    }
                </select>
                <label htmlFor="blogContent">محتوای اصلی :</label>
                <textarea id="blogContent" name="blogContent" value={content} onChange={(event) => onContentChange(event)}/>
                <button type="button" onClick={handleSubmitForm} disabled={!canSave}>ذخیره پست</button>
            </form>
        </section>
    )
}

export default CreateBlogForm;