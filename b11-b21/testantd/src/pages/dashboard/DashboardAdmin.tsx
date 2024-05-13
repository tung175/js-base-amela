import React, { useState } from "react";
import ContentLeftAdmin from "../../components/admin/ContentLeftAdmin";
import ContentRightAdmin from "../../components/admin/ContentRightAdmin";
import { Row } from "antd";

const DashboardAdmin: React.FC = () => {
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
        <ContentLeftAdmin setOpen={setOpen} open={open} onClose={onClose} />
        <ContentRightAdmin showDrawer={showDrawer} />
      </Row>
    </>
  );
};

export default DashboardAdmin;
