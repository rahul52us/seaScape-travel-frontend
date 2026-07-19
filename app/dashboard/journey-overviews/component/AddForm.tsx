"use client";
import { Box } from "@chakra-ui/react";
import CustomDrawer from "../../../component/common/Drawer/CustomDrawer";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import stores from "../../../store/stores";
import { readFileAsBase64 } from "../../../config/utils/utils";
import FormComponent from "./Form";
import { initialValues } from "../utils/constant";

const AddForm = observer(({ open, onClose, getData }: any) => {
  const [loading, setLoading] = useState(false);
  const {
    auth: { openNotification },
    journeyOverviewStore: { createJourneyOverview },
  } = stores;

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    const formData = {
      ...values,
    };

    if (values.galleryImages && Array.isArray(values.galleryImages)) {
      const processedImages = [];
      for (const img of values.galleryImages) {
        if (img.file) {
          const buffer = await readFileAsBase64(img.file);
          processedImages.push({
            buffer,
            filename: img.file.name,
            type: img.file.type,
            isAdd: 1,
          });
        }
      }
      formData.galleryImages = processedImages;
    }

    createJourneyOverview(formData)
      .then((data: any) => {
        getData();
        openNotification({
          title: "Created Successfully",
          message: data?.message || "Journey Overview created",
          type: "success",
        });
        resetForm();
        onClose();
      })
      .catch((err: any) => {
        openNotification({
          title: "Create Failed",
          message: err?.message || "Something went wrong",
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <CustomDrawer
        width="80vw"
        title="Add Journey Overview"
        open={open}
        close={() => {
          onClose();
        }}
      >
        <FormComponent
          initialValues={initialValues}
          close={() => {
            onClose();
          }}
          loading={loading}
          onSubmit={handleSubmit}
        />
      </CustomDrawer>
    </Box>
  );
});

export default AddForm;
