
const TableStatusFormatter = ({ status }: { status: any }) => {
  return (
    <div
      className={`rounded-md text-small py-1 px-2 text-xs font-semibold text-center min-w-[4rem] ${
        status == "Paid" || status === "success" || status === "successful" || status === "Successful"
          ? "bg-green-100 border-green-500 text-green-500"
          : status === "pending"
          ? "bg-yellow-100 border-yellow-500 text-yellow-500"
          : "bg-red-100 border-red-500 text-red-500"
      }`}
    >
      {`${status}`}
    </div>
  );
};

export default TableStatusFormatter;
