"use client";
import {
  Button,
  Flex,
  VStack,
  Card,
  SimpleGrid,
  Box,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { FaCheck, FaTimes, FaPlus, FaTrash } from "react-icons/fa";
import { Form, Formik, FieldArray } from "formik";
import { useState, useEffect } from "react";
import CustomInput from "../../../component/config/component/customInput/CustomInput";
import validation from "../utils/validation";
import stores from "../../../store/stores";
import { observer } from "mobx-react-lite";
import ShowFileUploadFile from "../../../component/common/ShowFileUploadFile/ShowFileUploadFile";

const FormComponent: React.FC<any> = observer(({
  initialValues,
  onSubmit,
  close,
  isEdit,
  loading,
}) => {
  const [showError, setShowError] = useState(false);
  const {
    locationStore: { getLocations, location },
  } = stores;

  useEffect(() => {
    getLocations({ page: 1, limit: 100 });
  }, [getLocations]);

  const locationOptions = location?.data?.map((loc: any) => ({
    label: loc.name,
    value: loc._id,
  })) || [];

  return (
    <Card p={8} borderRadius={10} bg="white" boxShadow="lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          onSubmit({ ...values }, actions);
        }}
      >
        {({ handleChange, values, errors, setFieldValue }: any) => (
          <Form>
            <VStack spacing={6} align="stretch">
              
              <Box>
                <Heading size="md" mb={4}>Basic Information</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <CustomInput
                    type="select"
                    name="locationId"
                    label="Linked Location"
                    placeholder="Select Location"
                    options={locationOptions}
                    value={locationOptions.find((opt: any) => opt.value === (values.locationId?._id || values.locationId))}
                    onChange={(val: any) => setFieldValue("locationId", val?.value)}
                    error={errors.locationId}
                    showError={showError}
                    isPortal={true}
                  />
                  <CustomInput
                    name="title"
                    placeholder="e.g. 5 Days in Meghalaya"
                    label="Title"
                    onChange={handleChange}
                    value={values.title}
                    error={errors.title}
                    showError={showError}
                  />
                  <CustomInput
                    name="duration"
                    placeholder="e.g. 4 Nights / 5 Days"
                    label="Duration"
                    onChange={handleChange}
                    value={values.duration}
                    error={errors.duration}
                    showError={showError}
                  />
                  <CustomInput
                    name="price"
                    placeholder="e.g. ₹25,000"
                    label="Price"
                    onChange={handleChange}
                    value={values.price}
                    error={errors.price}
                    showError={showError}
                  />
                </SimpleGrid>
                <Box mt={4}>
                  <CustomInput
                    name="description"
                    placeholder="Overview Description"
                    label="Description"
                    type="textarea"
                    rows={4}
                    onChange={handleChange}
                    value={values.description}
                    error={errors.description}
                    showError={showError}
                  />
                </Box>
              </Box>

              <Divider />

              <Box>
                <Heading size="md" mb={4}>Media & Details</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <Box p={4} borderWidth={1} borderRadius="lg" borderColor="gray.200" bg="gray.50">
                    <Heading size="sm" mb={3} color="gray.700">Gallery Images</Heading>
                    <CustomInput
                      type="file-drag"
                      name="galleryImages"
                      value={values.galleryImages}
                      isMulti={true}
                      accept="image/*"
                      onChange={(e: any) => {
                        const newFiles = Array.from(e.target.files).map((file: any) => ({
                          file,
                          isAdd: 1,
                          name: file.name
                        }));
                        const existingFiles = Array.isArray(values.galleryImages) ? values.galleryImages : [];
                        setFieldValue("galleryImages", [...existingFiles, ...newFiles]);
                      }}
                      showError={showError}
                    />
                    {values.galleryImages && values.galleryImages.length > 0 && (
                      <ShowFileUploadFile
                        files={values.galleryImages.filter((f: any) => !f.isDeleted).map((f: any) => f.file || f)}
                        removeFile={(_, index: number) => {
                          const newArr = [...values.galleryImages];
                          const activeFiles = newArr.filter(f => !f.isDeleted);
                          const fileToRemove = activeFiles[index];
                          
                          const actualIndex = newArr.findIndex(f => f === fileToRemove);
                          if (actualIndex > -1) {
                            newArr[actualIndex].isDeleted = 1;
                          }
                          setFieldValue("galleryImages", newArr);
                        }}
                        edit={isEdit}
                      />
                    )}
                  </Box>
                  <CustomInput
                    type="tags"
                    name="availableDates"
                    placeholder="e.g. 15 Aug, 20 Sep (press Enter)"
                    label="Available Dates"
                    value={values.availableDates}
                    onChange={(val: any) => setFieldValue("availableDates", val)}
                    error={errors.availableDates}
                    showError={showError}
                  />
                  <Box>
                    <Heading size="sm" mb={2}>What's Included</Heading>
                    <FieldArray name="included">
                      {({ push, remove }) => (
                        <VStack spacing={3} align="stretch">
                          {(values.included || []).map((_, index) => (
                            <Flex key={index} gap={2} align="center">
                              <Box flex="1">
                                <CustomInput
                                  name={`included.${index}`}
                                  placeholder="e.g. Breakfast & Dinner"
                                  onChange={handleChange}
                                  value={values.included?.[index] || ""}
                                  error={errors.included?.[index] as any}
                                  showError={showError}
                                />
                              </Box>
                              <Button mt={1} colorScheme="red" variant="ghost" onClick={() => remove(index)}>
                                <FaTrash />
                              </Button>
                            </Flex>
                          ))}
                          <Button size="sm" alignSelf="flex-start" leftIcon={<FaPlus />} onClick={() => push("")}>
                            Add Included Item
                          </Button>
                        </VStack>
                      )}
                    </FieldArray>
                  </Box>

                  <Box>
                    <Heading size="sm" mb={2}>What's Not Included</Heading>
                    <FieldArray name="notIncluded">
                      {({ push, remove }) => (
                        <VStack spacing={3} align="stretch">
                          {(values.notIncluded || []).map((_, index) => (
                            <Flex key={index} gap={2} align="center">
                              <Box flex="1">
                                <CustomInput
                                  name={`notIncluded.${index}`}
                                  placeholder="e.g. Flight Tickets"
                                  onChange={handleChange}
                                  value={values.notIncluded?.[index] || ""}
                                  error={errors.notIncluded?.[index] as any}
                                  showError={showError}
                                />
                              </Box>
                              <Button mt={1} colorScheme="red" variant="ghost" onClick={() => remove(index)}>
                                <FaTrash />
                              </Button>
                            </Flex>
                          ))}
                          <Button size="sm" alignSelf="flex-start" leftIcon={<FaPlus />} onClick={() => push("")}>
                            Add Excluded Item
                          </Button>
                        </VStack>
                      )}
                    </FieldArray>
                  </Box>
                </SimpleGrid>
              </Box>

              <Divider />

              {/* ITINERARY */}
              <Box>
                <Heading size="md" mb={4}>Itinerary</Heading>
                <FieldArray name="itinerary">
                  {({ push, remove }) => (
                    <VStack spacing={4} align="stretch">
                      {values.itinerary.map((_, index) => (
                        <Card key={index} p={4} variant="outline">
                          <Flex justify="space-between" align="center" mb={4}>
                            <Heading size="sm">Day {index + 1}</Heading>
                            {values.itinerary.length > 1 && (
                              <Button size="sm" colorScheme="red" variant="ghost" onClick={() => remove(index)}>
                                <FaTrash />
                              </Button>
                            )}
                          </Flex>
                          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                            <CustomInput
                              name={`itinerary.${index}.day`}
                              placeholder="e.g. Day 1"
                              label="Day Label"
                              onChange={handleChange}
                              value={values.itinerary[index].day}
                              error={errors.itinerary?.[index]?.day}
                              showError={showError}
                            />
                            <CustomInput
                              name={`itinerary.${index}.title`}
                              placeholder="e.g. Arrival in Guwahati"
                              label="Title"
                              onChange={handleChange}
                              value={values.itinerary[index].title}
                              error={errors.itinerary?.[index]?.title}
                              showError={showError}
                            />
                          </SimpleGrid>
                          <Box mt={4}>
                            <CustomInput
                              name={`itinerary.${index}.desc`}
                              placeholder="Description of the day..."
                              label="Description"
                              type="textarea"
                              rows={2}
                              onChange={handleChange}
                              value={values.itinerary[index].desc}
                              error={errors.itinerary?.[index]?.desc}
                              showError={showError}
                            />
                          </Box>
                        </Card>
                      ))}
                      <Button leftIcon={<FaPlus />} onClick={() => push({ day: "", title: "", desc: "" })}>
                        Add Day
                      </Button>
                    </VStack>
                  )}
                </FieldArray>
              </Box>

              <Divider />

              {/* WHAT TO EXPECT */}
              <Box>
                <Heading size="md" mb={4}>What to Expect</Heading>
                <FieldArray name="whatToExpect">
                  {({ push, remove }) => (
                    <VStack spacing={4} align="stretch">
                      {values.whatToExpect.map((_, index) => (
                        <Card key={index} p={4} variant="outline">
                          <Flex justify="space-between" align="center" mb={4}>
                            <Heading size="sm">Item {index + 1}</Heading>
                            {values.whatToExpect.length > 1 && (
                              <Button size="sm" colorScheme="red" variant="ghost" onClick={() => remove(index)}>
                                <FaTrash />
                              </Button>
                            )}
                          </Flex>
                          <Box mb={4}>
                            <CustomInput
                              name={`whatToExpect.${index}.title`}
                              placeholder="e.g. Comfortable Stays"
                              label="Title"
                              onChange={handleChange}
                              value={values.whatToExpect[index].title}
                              error={errors.whatToExpect?.[index]?.title}
                              showError={showError}
                            />
                          </Box>
                          <Box>
                            <CustomInput
                              name={`whatToExpect.${index}.desc`}
                              placeholder="Description..."
                              label="Description"
                              type="textarea"
                              rows={2}
                              onChange={handleChange}
                              value={values.whatToExpect[index].desc}
                              error={errors.whatToExpect?.[index]?.desc}
                              showError={showError}
                            />
                          </Box>
                        </Card>
                      ))}
                      <Button leftIcon={<FaPlus />} onClick={() => push({ title: "", desc: "" })}>
                        Add Expectation
                      </Button>
                    </VStack>
                  )}
                </FieldArray>
              </Box>

              {/* Action Buttons */}
              <Flex justifyContent="end" w="full" mt={4}>
                <Button
                  leftIcon={<FaTimes />}
                  mr={3}
                  onClick={close}
                  variant="outline"
                  colorScheme="red"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  leftIcon={<FaCheck />}
                  colorScheme="blue"
                  isLoading={loading}
                  onClick={() => setShowError(true)}
                >
                  Save
                </Button>
              </Flex>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  );
});

export default FormComponent;
