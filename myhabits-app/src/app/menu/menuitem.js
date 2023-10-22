import Link from "next/link";

export default function MenuItem(props) {
  return (
    <Link href={`${props.href}`} className="">
      <p className="min-w-[53px] text-5xl font-extrabold border-solid border-2 border-l-transparent border-t-transparent border-b-transparent pr-4 mr-4">
        {props.index}
      </p>
      <div className="text-left">
        <h3 className="uppercase font-bold bg-gradient-to-r from-transparent via-yellow-700 to-transparent w-full grow">
          {props.title}
        </h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
