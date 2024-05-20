import { useGetDetailQuery } from "@/redux/services/showsApi";
import { FormatRuntimeProps } from "@/shared/types";

const FormatRuntimeShows: React.FC<FormatRuntimeProps> = ({ id }) => {
  const { data: details } = useGetDetailQuery(id);

  const episode = details?.last_episode_to_air;

  const formatRuntime = (runtime: number | undefined) => {
    if (!runtime) return "N/A";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  return formatRuntime(
    episode?.runtime * episode?.episode_number * episode?.season_number
  );
};

export default FormatRuntimeShows;
