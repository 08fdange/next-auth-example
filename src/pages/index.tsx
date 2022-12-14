import type { NextPage } from "next";
import { trpc } from "../client/utils/trpc";

export const getServerSideProps = async () => {
  return {
    props: {
      requireAuth: false,
      enableAuth: false,
    },
  };
};

const HomePage: NextPage = () => {
  const { data, isLoading, isFetching, error, isError } =
    trpc.getHello.useQuery();

  return (
    <>
      <section className="min-h-screen pt-20 mb-[-80px]">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">{data?.message}</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
