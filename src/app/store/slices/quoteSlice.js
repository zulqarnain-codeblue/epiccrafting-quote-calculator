import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formInput: null,
  dataFiles: [],
  summaryData: null,
  airtableId: null,
  summaryLoading: null,
  summaryError: null,
  submittedQuotation: null,
  submmittingQuoteLoading: false,
  cloudinaryImages: [],
  showPlaceOrder: false,
  finalQuotePrice: null,
  checkedOtherTypes: {},
  selectedValues: {
    mainType: "",
    signage: "",
    signType: "",
    type: "",
    formType: "",
  },
  linesTextSignage: [
    {
      signText: "",
      signFont: "",
      signHeight: "",
    },
  ],
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setFormInput: (state, action) => {
      state.formInput = action.payload;
    },
    setDataFiles: (state, action) => {
      state.dataFiles = action.payload; // Array of files
    },
    setSummaryData: (state, action) => {
      state.summaryData = action.payload;
    },
    emptyFormInputSummaryData: (state) => {
      state.formInput = null;
      state.summaryData = null;
    },
    setAirtableid: (state, action) => {
      state.airtableId = action.payload;
    },
    setSummaryLoading: (state, action) => {
      state.summaryLoading = action.payload;
    },
    setSummaryError: (state, action) => {
      state.summaryError = action.payload;
    },
    setSubmittedQuotation: (state, action) => {
      state.submittedQuotation = action.payload;
    },
    setSubmmittingQuoteLoading: (state, action) => {
      state.submmittingQuoteLoading = action.payload;
    },
    setCloudinaryImages: (state, action) => {
      state.cloudinaryImages = action.payload;
    },
    setShowPlaceOrder: (state, action) => {
      state.showPlaceOrder = action.payload;
    },
    setFinalQuotePrice: (state, action) => {
      state.finalQuotePrice = action.payload;
    },
    setCheckedOtherTypes: (state, action) => {
      state.checkedOtherTypes = action.payload;
    },
    emptyCheckedOtherTypes: (state) => {
      state.checkedOtherTypes = {};
    },
    setSelectedValues: (state, action) => {
      state.selectedValues = action.payload;
    },
    emptySelectedValues: (state) => {
      state.selectedValues = {};
    },
    setLinesTextSignage: (state, action) => {
      state.linesTextSignage = action.payload;
    },
  },
});

export const {
  setFormInput,
  setDataFiles,
  setSummaryData,
  emptyFormInputSummaryData,
  setAirtableid,
  setSummaryLoading,
  setSummaryError,
  setSubmittedQuotation,
  setSubmmittingQuoteLoading,
  setCloudinaryImages,
  setShowPlaceOrder,
  setFinalQuotePrice,
  setCheckedOtherTypes,
  emptyCheckedOtherTypes,
  setSelectedValues,
  emptySelectedValues,
  setLinesTextSignage,
} = quoteSlice.actions;
 
export default quoteSlice.reducer;
