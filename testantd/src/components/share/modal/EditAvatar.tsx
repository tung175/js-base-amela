import { Modal } from "antd";
import { useState } from "react";
import Avatar from "react-avatar-edit";

interface Profile {
  pview: string;
}
interface Iprops {
  handleOk: () => void;
  isModalOpen: boolean;
  handleCancel: () => void;
}
const EditAvatar = (props: Iprops) => {
  const [imagecrop, setimagecrop] = useState<boolean>(false);
  const [image, setimage] = useState<string>("");
  const [src, setsrc] = useState<string>("");
  const [profile, setprofile] = useState<Profile[]>([]);
  const [pview, setpview] = useState<string | null>(null);

  const onClose = () => {
    setpview(null);
  };

  const onCrop = (view: string) => {
    setpview(view);
  };

  const saveCropImage = () => {
    console.log(pview);
    if (pview) {
      setprofile([...profile, { pview }]);
    }
    props.handleOk()
  };

  const profileFinal = profile.map((item) => item.pview);
  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.isModalOpen}
        onOk={saveCropImage}
        onCancel={props.handleCancel}
      >
        <div>
          <Avatar
            width={500}
            height={400}
            onCrop={onCrop}
            onClose={onClose}
            src={src}
            shadingColor={"#474649"}
            backgroundColor={"#474649"}
          />
          <div className=" flex flex-column align-items-center mt-5 W-12">
            <div className="flex justify-content-around w-12 mt-4 ">
              <button
                onClick={saveCropImage}
                // icon="pi pi-check"
              >
                Save
              </button>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(event) => {
                  const file = event.target.files ? event.target.files[0] : null;
                  if (file && file.type.substring(0, 5) === "image") {
                    setimage(URL.createObjectURL(file));
                  } else {
                    setimage("");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditAvatar;
