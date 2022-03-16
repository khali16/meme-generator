import { Box } from "@mui/system";

interface Props {
  src: string;
  name: string;
  boxCount: number;
  height: number;
  width: number;
}

const SelectedMeme: React.FC<Props> = ({
  src,
  name,
  boxCount,
  height,
  width,
}) => {
  return (
    <>
      {!src ? null : (
        <Box>
          <img src={src} height={height} width={width} />
        </Box>
      )}
    </>
  );
};

export default SelectedMeme;
