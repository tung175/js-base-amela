import React from "react";
import { useState } from "react";
import Avatar from "react-avatar-edit";
import img from "../../assets/admin.png"
// const EditAvatar = () => {
//   // const [preview, setPreview] = useState(null);
//   // function onClose() {
//   //   setPreview(null);
//   // }
//   // function onCrop(pv: any) {
//   //   setPreview(pv);
//   // }
//   // function onBeforeFileLoad(elem: any) {
//   //   if (elem.target.files[0].size > 71680) {
//   //     alert("File is too big!");
//   //     elem.target.value = "";
//   //   }
//   // }
//   const [imagecrop, setimagecrop] = useState(false);
//   const [image, setimage] = useState("");
//   const [src, setsrc] = useState(false);
//   const [profile, setprofile] = useState([]);
//   const [pview, setpview] = useState(false);
//   const profileFinal = profile.map((item) => item.pview);
//   const onClose = () => {
//     setpview(false);
//   };
//   const onCrop = (view: any) => {
//     setpview(view);
//   };
//   const saveCropImage = () => {
//     setprofile([...profile, { pview }]);
//     setimagecrop(false);
//   };
//   return (
//     <>
//       {/* <div>
//       <Avatar
//         width={300}
//         height={300}
//         onCrop={onCrop}
//         onClose={onClose}
//         onBeforeFileLoad={onBeforeFileLoad}
//         // src={null}
//       />
//       {preview && <img src={preview} alt="Preview" />}
//     </div> */}
//       <div>
//         <div className="profile_img text-center p-4">
//           <div className="flex flex-column justify-content-center align-items-center">
//             <img
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 borderRadius: "50%",
//                 objectFit: "cover",
//                 border: "4px solid green",
//               }}
//               onclick={() => setimagecrop(true)}
//               src={profileFinal.length ? profileFinal : img}
//               alt=""
//             />
//             <label htmlFor="" className="mt-3 font-semibold text-5x1">
//               Parshotam Rughani
//             </label>
//             <div>
//               <div>
//                 <Avatar
//                   width={500}
//                   height={400}
//                   onCrop={onCrop}
//                   onClose={onClose}
//                   src={src}
//                   shadingColor={"#474649"}
//                   backgroundColor={"#474649"}
//                 />
//                 <div className=" flex flex-column align-items-center mt-5 W-12">
//                   <div className="flex justify-content-around w-12 mt-4 ">
//                     <button
//                       onclick={saveCropImage}
//                       label="Save"
//                       icon="pi pi-check"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <input
//               type="file"
//               accept="image/*"
//               style={{ display: "none" }}
//               onChange={(event) => {
//                 const file = event.target.files[0];
//                 if (file && file.type.substring(0, 5) === "image") {
//                   setimage(file);
//                 } else {
//                   setimage("");
//                 }
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditAvatar;
interface Profile {
    pview: string;
  }
  
  const EditAvatar: React.FC = () => {
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
      if (pview) {
        setprofile([...profile, { pview }]);
      }
      setimagecrop(false);
    };
  
    const profileFinal = profile.map((item) => item.pview);
  
    return (
      <>
        <div>
          <div className="profile_img text-center p-4">
            <div className="flex flex-column justify-content-center align-items-center">
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid green",
                }}
                onClick={() => setimagecrop(true)}
                src={profileFinal.length ? profileFinal[0] : img}
                alt=""
              />
              <label htmlFor="" className="mt-3 font-semibold text-5x1">
                Parshotam Rughani
              </label>
              <div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default EditAvatar;