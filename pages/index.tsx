import Layout from '../layouts/main';
import UserView from '../components/user/index';
import prisma from "../lib/prisma";
import type { GetServerSideProps } from "next";
import { User } from '@prisma/client';
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async () => {
  const user = await prisma.user.findMany();

  return {
    props: { user }
    
      
  };
};

type Props = {
  user: User[];
};



  const IndexPage: React.FC<Props> = (user) => {
  
    const router = useRouter()

    const refreshData = () => {
      router.replace(router.asPath)
    }
  return (
    <Layout title='Home' >
     <UserView onClick={   refreshData}    user={user.user} />
    </Layout>
  )
}


export default IndexPage

