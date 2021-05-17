import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import MainContentBlock from './MainContentBlock'

const ContentBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if(props.type === "main") return <MainContentBlock {...props}/>;
  return null;
};

export default ContentBlock;
