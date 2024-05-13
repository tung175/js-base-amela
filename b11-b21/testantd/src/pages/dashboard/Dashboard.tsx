import React, { useState } from "react";

import ContentRight from "../../components/share/ContentRight";
import ContentLeft from "../../components/share/ContentLeft";
import { Row } from "antd";

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   CallCurrentAuth();
  // }, []);

  const onClose = () => {
    setOpen(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  return (
    <>
      <Row>
        <ContentLeft setOpen={setOpen} open={open} onClose={onClose} />
        <ContentRight showDrawer={showDrawer} />
      </Row>
    </>
  );
};

export default Dashboard;
