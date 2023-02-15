:::tip 流程规范
1. 拉取最新代码。开始开发前，首先确保自己的代码为最新。
2. 新建分支。每次开发新功能，都应该新建一个单独的分支。
3. 提交分支 commit，撰写提交信息。
4. 与主分支同步。
5. 合并 commit。分支开发完，可能有一堆的 commit，但是合并到主干的时候，往往希望只有一个（或最多两三个）commit，这样不仅清晰，也容易管理。
6. 推送到远程仓库。
7. 请求别人进行 code review，确认无误可以合并到 master。
<p style="font-weight: bold">分支规范</p>
master分支（主分支）<br/>
dev分支（开发分支）
<p style="font-weight: bold">commit 规范</p>
提供更多的历史信息，方便快速浏览。<br/>
可以过滤某些 commit（比如文档改动），便于快速查找信息。<br/>
可以直接从 commit 生成 Change log。
<p style="font-weight: bold">格式</p>
Commit message 都包括两部分：Header，Body。<br/>
feature：新功能（feature）<br/>
fixbug：修补 bug <br/>
docs：文档（documentation） <br/>
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）<br/>
test：增加测试
:::
