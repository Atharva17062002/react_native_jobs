import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const NearbyJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native Developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          (console.log(error), (<Text>something went wrong.</Text>))
        ) : (
          data?.map((job) => <NearbyJobCard job = {job} key = {`nearby-job-${job?.job_id}`} handleNavigate = {() => router.push(`/job-details/${job.job_id}`)}/>)
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
