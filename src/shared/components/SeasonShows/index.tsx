import { useGetDetailQuery } from "@/redux/services/showsApi";
import { FormatRuntimeProps } from "@/shared/types";

const SeasonShows: React.FC<FormatRuntimeProps> = ({ id }) => {
  const { data: details } = useGetDetailQuery(id);

  return (
    <span className="text-[0.6rem] text-[#999999]">
      {details?.number_of_seasons} Season
    </span>
  );
};

export default SeasonShows;
