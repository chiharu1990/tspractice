import fetch from "node-fetch";
import dotenv from "dotenv";
import { errorMonitor } from "events";

// .env ファイルを読み込む
dotenv.config();

const createIssue = async () => {
  const token = process.env.GIT_ACCESS_TOKEN;

  if (!token) {
    console.error("GIT_ACCESS_TOKEN が設定されていません。");
    return;
  }

  try {
    const response = await fetch("https://api.github.com/repos/chiharu1990/tspractice/issues", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        title: "New Issue Title",
        body: "issueの説明",
        assignees: ["chiharu1990"],
        labels: ["bug"],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("APIエラー", errorData);
      return;
    }
  } catch {
    console.error("リクエスト中にエラーが発生しました", error);
  }
};

createIssue();
