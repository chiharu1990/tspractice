import dotenv from "dotenv";
import { Octokit } from "@octokit/core";
import fetch from "node-fetch";

// .env ファイルを読み込む
dotenv.config();

const octokit = new Octokit({
  auth: process.env.GIT_ACCESS_TOKEN,
  request: { fetch },
});

const createIssue = async () => {
  const response = await octokit.request("POST /repos/chiharu1990/tspractice/issues", {
    owner: "chiharu1990",
    repo: "tspractice",
    title: "New Issue Title",
    body: "issueの説明",
    assignees: ["chiharu1990"],
    labels: ["bug"],
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  console.log(response.data);
};

createIssue();
