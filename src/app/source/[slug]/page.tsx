import NewsList from "@/componentts/templates/NewsList";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <div>

        <NewsList val={slug}/>
  </div>;
};
export default Page;
