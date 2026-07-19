import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { getStatusType } from "../../../config/utils/function";
import { readFileAsBase64 } from "../../../config/utils/utils";
import CustomDrawer from "../../../component/common/Drawer/CustomDrawer";
import FormComponent from "./Form";

const EditForm = observer(({ open, getData, data, onClose }: any) => {
  const [loading,setLoading] = useState(false);

  const {
    auth: { openNotification },
    journeyOverviewStore: { updateJourneyOverview },
  } = stores;

  const handleSubmit = async (values: any, { resetForm }: any) => {
    const formData = { ...values };
    setLoading(true);

    if (values.galleryImages && Array.isArray(values.galleryImages)) {
      const processedImages = [];
      const deletedImages = [];
      
      for (const img of values.galleryImages) {
        if (img.isDeleted) {
          deletedImages.push(img);
        } else if (img.file) {
          const buffer = await readFileAsBase64(img.file);
          processedImages.push({
            buffer,
            filename: img.file.name,
            type: img.file.type,
            isAdd: 1,
          });
        } else {
          // existing images that are not deleted
          processedImages.push(img);
        }
      }
      formData.galleryImages = processedImages;
      formData.deletedImages = deletedImages;
    }

    updateJourneyOverview(data._id, formData)
      .then((res: any) => {
        openNotification({
          title: "Successfully Updated",
          message: res?.message || "Journey Overview updated",
          type: "success",
        });
        getData();
        onClose();
        resetForm();
      })
      .catch((err: any) => {
        openNotification({
          title: "Update Failed",
          message: err?.data?.message || err?.message || "Something went wrong",
          type: getStatusType(err.status) || "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <CustomDrawer
      width="80vw"
      title={`Edit Journey Overview`}
      open={open}
      close={() => {
        onClose();
      }}
    >
      <FormComponent
        isEdit={true}
        initialValues={{
          ...data,
          locationId: data?.locationId?._id || data?.locationId
        }}
        onSubmit={handleSubmit}
        loading={loading}
        close={() => {
          onClose();
        }}
      />
    </CustomDrawer>
  );
});

export default EditForm;
