import { FC } from "react";

interface ISectionTitle {
 title: string
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => {
  return (
    <h2 className="mb-4 text-lg font-semibold text-secondaryText font-poppins">{title}</h2>
  )
}

export default SectionTitle;