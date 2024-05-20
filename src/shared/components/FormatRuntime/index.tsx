import { useGetDetailQuery } from "@/redux/services/movieApi";
import { FormatRuntimeProps } from "@/shared/types";

const FormatRuntime: React.FC<FormatRuntimeProps> = ({ id }) => {
  const { data: details } = useGetDetailQuery(id);

  const formatRuntime = (runtime: number | undefined) => {
    if (!runtime) return "N/A";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  return formatRuntime(details?.runtime);
};

export default FormatRuntime;
