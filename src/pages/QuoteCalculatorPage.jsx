import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Quote from "../json/MainQuote.json";
import Card from "../components/Card";

import { setSelectedValues } from "../../../epiccrating-portal-react/src/store/slices/QuoteSlice";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import InputField from "../components/InputField";
import TextareaField from "../components/TextareaField";
import UploadField from "../components/UploadField";

function QuoteCalculatorPage() {
  const [currentObj, setCurrentObj] = useState(Quote);
  const [currentParam, setCurrentParam] = useState(null);
  const [paramType, setparamType] = useState("signageType");
  const [url, setUrl] = useState(null);
  const [parentObj, setParentObj] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cloudinaryImages, setCloudinaryImages] = useState([]);
  const [linesTextSignage, setLinesTextSignage] = useState([]);
  const [formType, setFormType] = useState(null);
  const [signage, setSignage] = useState(null);
  const [mainType, setMainType] = useState(null);
  const [signType, setSignType] = useState(null);
  const [formInput, setFormInput] = useState(null);
  const [summaryData, setSummaryData] = useState(null);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryError, setSummaryError] = useState(null);
  const [submmittingQuoteLoading, setSubmmittingQuoteLoading] = useState(false);
  const [airtableId, setAirtableId] = useState(null);
  const [submittedQuotation, setSubmittedQuotation] = useState(null);
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);
  const [finalQuotePrice, setFinalQuotePrice] = useState(null);
  const [checkedOtherTypes, setCheckedOtherTypes] = useState({});
  const [userSelectedValues, setUserSelectedValues] = useState({
    mainType: "",
    signage: "",
    signType: "",
    type: "",
    formType: "",
  });
  const [allParams, setAllParams] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to get query parameters from the URL
  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  // Function to add a query parameter
  const addQueryParam = (key, value) => {
    console.log("before userSelectedValues", userSelectedValues);
    setAllParams({ ...allParams, [key]: value });
    if (key == "signageType") {
      setUserSelectedValues({
        ...userSelectedValues,
        mainType: value,
        signage: "",
        signType: "",
      });
      dispatch(setSelectedValues({ ...userSelectedValues, mainType: value }));
    }
    if (key == "signage") {
      setUserSelectedValues({
        ...userSelectedValues,
        signage: value,
        signType: "",
      });
      dispatch(setSelectedValues({ ...userSelectedValues, mainType: value }));
    }
    if (key == "signType") {
      setUserSelectedValues({
        ...userSelectedValues,
        signType: value,
        type: "",
        formType: "",
      });
      dispatch(setSelectedValues({ ...userSelectedValues, mainType: value }));
    }
    if (key == "type") {
      setUserSelectedValues({
        ...userSelectedValues,
        type: value,
        formType: "",
      });
      dispatch(setSelectedValues({ ...userSelectedValues, mainType: value }));
    }
    if (key == "formType") {
      setUserSelectedValues({ ...userSelectedValues, formType: value });
      dispatch(setSelectedValues({ ...userSelectedValues, mainType: value }));
    }

    setCurrentParam(value);
    const params = getQueryParams();
    params.set(key, value); // Add or update the parameter
    console.log("allParams", allParams);
    console.log("usreSelectedValues", userSelectedValues);
    navigate(`?${params.toString()}`); // Update the URL
  };

  // Function to remove a query parameter
  const removeQueryParam = (key) => {
    const params = getQueryParams();
    params.delete(key); // Remove the parameter
    navigate(`?${params.toString()}`); // Update the URL
  };

  useEffect(() => {
    const params = getQueryParams();
    console.log("params", params);
    console.log("before currentObj", currentObj);
    if (!params.size) {
      setCurrentObj(Quote);
      // navigate(`/`);
    }
    if (params.size && params.get("signageType")) {
      setCurrentObj(
        Quote.filter((item) => item.param == params.get("signageType"))[0]
          ?.types
      );
      setparamType("signage");
    }
    if (params.size && params.get("signage")) {
      console.log('params.get("signage")', params.get("signage"));
      setCurrentObj(
        Quote.filter(
          (item) => item.param == params.get("signageType")
        )[0]?.types.filter((item) => item.param == params.get("signage"))[0]
          ?.types
      );
      setparamType("type");
    }

    if (params.size && params.get("type")) {
      setCurrentObj(
        currentObj.filter((item) => item.param == params.get("type"))[0]?.types
      );
      setparamType("selectedType");
      // addQueryParam('size', true);
    }
    // if(params.size && params.get("formType")){
    //   setCurrentObj(currentObj.filter((item) => item.param == params.get("selectedType"))[0]?.types);
    // }
    console.log("allParams", allParams);
    console.log("after currentObj", currentObj);
    console.log("location.search", location.search);
    console.log("currentParam", currentParam);
    // setAllParams(params);
  }, [allParams, location.search]);

  return (
    <section className="hero bg-gray-50 min-w-1/2 mx-auto py-16 px-20 rounded-2xl">
      <div>
        <h1 className="text-3xl font-bold">
          Select your{" "}
          <span className="uppercase text-blue-500">
            {currentParam || paramType}
          </span>
        </h1>

        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          {currentObj ? (
            currentObj.map((item, index) => {
              return (
                <Card
                  image={item.image}
                  onClickFunc={addQueryParam}
                  keyType={paramType}
                  value={item.param}
                  key={index}
                />
              );
            })
          ) : (
            <div className="flex justify-center items-center gap-10">
              <div className="flex-1">
                <Form>
                  <InputField
                    label="Enter Sign Height (inches):"
                    type="number"
                    name="height"
                    required={true}
                  />
                  <InputField
                    label="Enter Sign Width (inches):"
                    type="number"
                    name="width"
                    required={true}
                  />
                  <InputField
                    label="Return Depth (inches):"
                    type="number"
                    name="depth"
                    required={true}
                  />
                  <TextareaField
                    label="More Details:"
                    name="details"
                    required={true}
                  />
                  <UploadField
                    label="Upload Artwork:"
                    name="files"
                    required={true}
                  />
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-500 transition-all hover:bg-blue-700 shadow-2xl shadow-blue-500 px-9 py-3 text-white rounded-lg mt-4 block mx-auto w-full"
                    >
                      Next
                    </button>
                  </div>
                </Form>
              </div>
              <div className="flex-1">
                <img
                  src="https://cdn.shopify.com/s/files/1/0610/0012/2547/files/sign_dimensions_img.png?v=1725434334"
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuoteCalculatorPage;
