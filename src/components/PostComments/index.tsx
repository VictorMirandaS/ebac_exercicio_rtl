import { useState } from "react";

type PostCommentsProps = {
    comments?: string[]; // Lista inicial de comentários (opcional)
};

const PostComments = ({ comments = [] }: PostCommentsProps) => {
    const [commentList, setCommentList] = useState(comments);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setCommentList([...commentList, newComment]);
            setNewComment("");
        }
    };

    return (
        <div>
            <ul className="post-comments" data-testid="post-comments">
                {commentList.length > 0 ? (
                    commentList.map((comment, index) => (
                        <li key={index} className="post-comment" data-testid="post-comment">
                            {comment}
                        </li>
                    ))
                ) : (
                    <li className="post-comment">Nenhum comentário ainda.</li>
                )}
            </ul>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAddComment();
                }}
                className="post-comments-form"
            >
                <textarea
                    className="post-comments-form-textarea"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    aria-label="Adicionar comentário"
                />
                <button
                    className="post-comments-form-button"
                    type="submit"
                >
                    Comentar
                </button>
            </form>
        </div>
    );
};

export default PostComments;
