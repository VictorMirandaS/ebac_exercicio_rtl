import { render, screen } from "@testing-library/react";
import Post from ".."; // Importa o componente

describe("Teste para o componente Post", () => {
    test("Deve renderizar corretamente", () => {
        // Renderiza o componente com dados necessários
        render(
            <Post
                imageUrl="https://via.placeholder.com/250x250"
                comments={["Primeiro comentário", "Segundo comentário"]}
            >
                Teste
            </Post>
        );

        // Verifica se o texto do post está presente
        expect(screen.getByText("Teste")).toBeInTheDocument();

        // Verifica se a imagem do post está presente e possui o atributo src correto
        const postImage = screen.getByAltText("Post");
        expect(postImage).toBeInTheDocument();
        expect(postImage).toHaveAttribute("src", "https://via.placeholder.com/250x250");

        // Verifica se o componente PostComments está presente
        const commentsSection = screen.getByTestId("post-comments");
        expect(commentsSection).toBeInTheDocument();

        // Verifica se a quantidade de comentários está correta
        expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });
});
