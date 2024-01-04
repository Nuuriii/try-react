//kita bisa ibaratkan props itu seperti paramter

//ketika ingin membuat props kita dapat menggunakan interface untuk mendefinisikan tipe datanya
interface CardProps {
  title: string;
  content: string;
}

export function Card({ title, content }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
