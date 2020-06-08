::::::::::::: 開版包說明 :::::::::::::

1. _common 資料夾請放置網站每頁所需使用的共用區塊檔。

2. message.php 為系統訊息頁，請使用任一頁切版，並於主內容位置加上一段文字訊息，以供程式製作時使用。

3. assets 資料夾請放置靜態檔案，如 css、js、font、images，請依檔案類型放置對應資料夾。

4. 每頁必引用的 css 檔案一律放在 assets/css/common 資料夾，套件 css 檔案請放在 assets/css/plugin 資料夾，其餘 css 檔案請放在 assets/css 資料夾。

5. 每頁必引用的 js 檔案一律放在 assets/js/common 資料夾，套件 js 檔案請放在 assets/js/plugin 資料夾，其餘 js 檔案請放在 assets/js 資料夾。

6. 主要 css、js 檔案 (如：bootstrap、jQuery) 可依實際案件需求替換為最新版本。

7. 任何引用 css、js 檔案請於檔名加上版本號 (例：jquery-1.11.2.min.js)，並使用套件本身所提供的壓縮版本。

8. 避免使用 CDN 引用 css 和 js 檔案，原因為當主機載入速度慢時，使用 CDN 也無法立即顯示網頁。當主機載入速度較快時，如 CDN 速度相對較慢，反而會拖累頁面載入，故一律請引用主機內的相對路徑檔案。

9. 當頁所引用 css 檔案請放置在 <head> 標籤內，js 檔案則請放置在 </body> 前方。此配置經測試後對 SEO 影響不大，但能帶給使用者最好的操作體驗。

10. 單標籤結尾可以不用加上斜線，例如：<meta name="robots" content="all" />，在 HTML5 標準下不會影響頁面呈現。

11. 引用 css 和 js 檔均可以不用加上 type 屬性，例如：<script type="text/javascript" src="assets/js/lib/jquery-1.11.2.min.js">，在 HTML5 標準下不會影響頁面呈現。

12. <a> 請一定要加上 title 屬性，此為 seo 關鍵字優化的一部份。

13. <img> 請一定要加上 alt 屬性，當圖片未載入時仍會有文字提示，同時此為 seo 關鍵字優化的一部份。

14. 原始碼縮排請統一使用 space 或 tab，請勿兩者同時混搭，在不同的編輯器可能因設定值不同，無法正常呈現縮排畫面。

15. 圖片請使用熊貓做壓縮優化(同一張圖至少要壓兩次)，減少圖片本身的大小，此為影響 SEO 的重點項目。

16. 切版頁面請記得使用 w3c validator 驗證有無符合 html5 標準規則與遺漏上述需處理的項目，減少頁面出錯的機會。

17. css 規則請一次性將容器內會用到的屬性全寫在同一個 class，避免類似 <div class="xxx yyy zzz aaa bbb ccc"> 這種寫法，如需寫多組，最多請控制在 3 組內 (不列入 bootstrap 樣式)。

18. 請勿使用 id 當做 css 樣式篩選器，許多時候撰寫 js 程式碼會用到 id，如替換掉 id 值則有可能會造成原本的 css 樣式失效。另外，也請多利用繼承的寫法，可針對容器內指定標籤下樣式，減少在 html 下 class。
