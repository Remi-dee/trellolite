import { UserCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  loading: boolean;
  suggestion: string;
};

function Summary({ loading, suggestion }: Props) {
  return (
    <div className="flex items-center justify-center px-5 py-2 md:py-5">
      <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
        <UserCircleIcon
          className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${
            loading && "animate-spin"
          }`}
        />
        {suggestion && !loading
          ? suggestion
          : "GPT Summary, coming soon..."}
      </p>
    </div>
  );
}

export default Summary;
