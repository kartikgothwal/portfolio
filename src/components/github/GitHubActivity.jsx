import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const GITHUB_PAT_TOKEN = import.meta.env.VITE_GITHUB_PAT_TOKEN;

const GitHubActivity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
  const [username, setUsername] = useState(GITHUB_USERNAME);
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [repoDetails, setRepoDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const createIssue = async () => {
    if (!selectedRepo || !issueTitle || !issueDescription) return;
    try {
      setLoading(true);
      setError(null);
      await axios.post(
        `${BACKEND_URL}/github/${selectedRepo}/issues`,
        {
          title: issueTitle,
          body: issueDescription,
        },
        {
          headers: {
            Authorization: `${GITHUB_PAT_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      setIsIssueModalOpen(false);
      setIssueTitle("");
      setIssueDescription("");
      toast.success("Successfully created the issue");
    } catch (error) {
      setError("Error creating issue.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchRepos = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(
        `https://api.github.com/users/kartikgothwal/repos`,
        {
          headers: {
            Authorization: `token ${GITHUB_PAT_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      setRepos(res.data);
      setIsModalOpen(true);
    } catch (error) {
      toast.error("Error fetching repositories.");
      setError("Error fetching repositories.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRepoDetails = async () => {
    if (!selectedRepo) return;
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${BACKEND_URL}/github/${selectedRepo}`, {
        headers: {
          Authorization: `token ${GITHUB_PAT_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });
      setRepoDetails(res.data);
      setUserDetails(null);
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Error fetching repository details.");

      setError("Error fetching repository details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(`${BACKEND_URL}/github`, {
        headers: {
          Authorization: `token ${GITHUB_PAT_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      });
      setUserDetails(res.data);
      setRepoDetails(null);
      toast.success("Successfully fetched the user details");
    } catch (error) {
      setError("Error fetching user details.");
      toast.error("Error fetching user details.");

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Activity</h1>
      <div className="mb-4 flex space-x-4">
        <button
          onClick={fetchUserDetails}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Loading..." : "Fetch User Details"}
        </button>
        <button
          onClick={fetchRepos}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Loading..." : "Fetch Repositories"}
        </button>
        <button
          onClick={() => {
            fetchRepos();
            setIsIssueModalOpen(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Issue
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {userDetails && (
        <div className="p-4 bg-gray-200 rounded shadow mt-4 text-black">
          <h2 className="font-bold">User Details:</h2>
          <img
            src={userDetails.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full mt-2"
          />
          <ul>
            {Object.entries(userDetails).map(([key, value]) => (
              <li key={key} className="text-sm text-black">
                <strong>{key}:</strong> {value ? value.toString() : "N/A"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {repoDetails && (
        <div className="p-4 bg-gray-200 rounded shadow mt-4 text-black">
          <h2 className="font-bold text-lg mb-2">Repository Details</h2>
          <ul>
            {Object.entries(repoDetails).map(([key, value]) => (
              <li key={key} className="text-sm">
                <strong>{key}:</strong>{" "}
                {typeof value === "object" && value !== null ? (
                  <pre className="bg-gray-100 p-2 rounded">
                    {JSON.stringify(value, null, 2)}
                  </pre>
                ) : (
                  value?.toString() || "N/A"
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-black">
              Select a Repository
            </h2>
            <select
              className="w-full p-2 border rounded"
              value={selectedRepo}
              onChange={(e) => setSelectedRepo(e.target.value)}
            >
              <option value="">-- Select Repo --</option>
              {repos && repos.length > 0 ? (
                repos.map((repo) => (
                  <option key={repo.id} value={repo.name}>
                    {repo.name}
                  </option>
                ))
              ) : (
                <option disabled>No repositories available</option>
              )}
            </select>
            {selectedRepo === "" && (
              <p className="text-red-500 text-sm mt-2">
                Please select a repository.
              </p>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={fetchRepoDetails}
                disabled={!selectedRepo || loading}
                className={`px-4 py-2 rounded ${
                  !selectedRepo
                    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
              >
                {loading ? "Loading..." : "Fetch Details"}
              </button>
            </div>
          </div>
        </div>
      )}
      {isIssueModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-black">
              Create a GitHub Issue
            </h2>
            <select
              className="w-full p-2 border rounded mb-2"
              value={selectedRepo}
              onChange={(e) => setSelectedRepo(e.target.value)}
            >
              <option value="">-- Select Repo --</option>
              {repos.map((repo) => (
                <option key={repo.id} value={repo.name}>
                  {repo.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="w-full p-2 border rounded mb-2"
              placeholder="Issue Title"
              value={issueTitle}
              onChange={(e) => setIssueTitle(e.target.value)}
            />
            <textarea
              className="w-full p-2 border rounded mb-2"
              placeholder="Issue Description"
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
            ></textarea>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsIssueModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={createIssue}
                disabled={
                  !selectedRepo || !issueTitle || !issueDescription || loading
                }
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                {loading ? "Submitting..." : "Submit Issue"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubActivity;
