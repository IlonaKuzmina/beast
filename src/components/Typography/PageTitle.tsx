import { FC } from "react";


interface IPageTitle {
  title:string;
}

const PageTitle: FC<IPageTitle> = ({ title }) => {
  return (
    <h1 className="my-6 text-2xl font-semibold text-secondaryText font-poppins">{title}</h1>
  )
}

export default PageTitle;
