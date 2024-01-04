interface ComponentProps {
  name: string;
}

export function Props({ name }: ComponentProps) {
  return <div>halo nama saya {name}</div>;
}
