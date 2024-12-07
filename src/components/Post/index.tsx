import styles from './Post.module.css';
import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
    comments?: string[]; // Novo prop para comentários
};

const Post = ({ children, imageUrl, comments = [] }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} alt="Post" />
        <p className={styles['post-text']}>{children}</p>
        <PostComments comments={comments} />
    </div>
);

export default Post;
