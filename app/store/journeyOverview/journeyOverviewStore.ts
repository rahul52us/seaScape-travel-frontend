import { makeAutoObservable } from "mobx";
import axios from "axios";
import { authStore } from "../authStore/authStore";
import stores from "../stores";

class JourneyOverviewStore {

  journeyOverview = {
    data: [],
    totalPages: 1,
    loading: true,
  };

  constructor() {
    makeAutoObservable(this);
  }

  getJourneyOverviews = async (sendData: {
    limit?: number;
    page: number;
    search?: string;
    reset?:boolean
  }) => {
      this.journeyOverview.loading = true;
      try {
        const { limit = 10, page, search } = sendData;
        const searchQuery = search
          ? `&search=${encodeURIComponent(search)}`
          : "";

        const { data } = await axios.get(
          `/journey-overview/get?page=${page}&limit=${limit}${searchQuery}&company=${stores.auth.company}`
        );

        this.journeyOverview.data = data?.data?.data || [];
        this.journeyOverview.totalPages = data?.data?.totalPages || 0;
        return data.data;
      } catch (err: any) {
        return Promise.reject(err?.response?.data || err);
      } finally {
        this.journeyOverview.loading = false;
      }
  };

  deleteJourneyOverview = async (sendData: any) => {
    try {
      const { data } = await axios.delete(`/journey-overview/${sendData._id}`);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  createJourneyOverview = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/journey-overview/create`, {
        ...sendData,
        company: authStore.company,
      });
      this.journeyOverview.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  updateJourneyOverview = async (id: any, sendData: any) => {
    try {
      const { data } = await axios.put(`/journey-overview/${id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response || err);
    }
  };
}

export const journeyOverviewStore = new JourneyOverviewStore();
