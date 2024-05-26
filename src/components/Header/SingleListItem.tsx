import classNames from "classnames"

interface SingleListItemProps {
    active: boolean;
    name: string;
}

const SingleListItem: React.FC<SingleListItemProps> = ({active, name}) => {
  return (
    <li className={classNames(
        "font-montserrat relative", 
        {
        "font-bold before:content-[''] before:w-2 before:h-5 before:block before:absolute before:bg-main before:bottom-[50%-12px] before:left-[-15px] ml-2": active
        }
    )}>{name}</li>
  )
}

export default SingleListItem