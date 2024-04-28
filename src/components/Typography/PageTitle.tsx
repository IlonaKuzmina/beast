import { FC } from "react";


interface IPageTitle {
  title:string;
  aligne?: string;
}

const PageTitle: FC<IPageTitle> = ({ title, aligne }) => {
  return (
    <h1 className={`my-6 text-2xl font-semibold text-secondaryText font-poppins text-${aligne} select-none`}>{title}</h1>
  )
}

export default PageTitle;
