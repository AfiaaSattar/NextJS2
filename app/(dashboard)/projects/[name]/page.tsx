export default async function ProjectDetails({ params }: { params: Promise<{ name: string }>;}) {
  const { name } = await params;

  return (
      <main>
       <h1>ProjecDetails {name} </h1>
      </main>
  );
}
