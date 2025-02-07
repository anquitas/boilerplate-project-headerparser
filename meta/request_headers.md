## Request Headers (Sent by the client)
+ Accept – Specifies the media types the client can handle.
+ Accept-Encoding – Indicates supported content encodings (e.g., gzip, deflate).
+ Accept-Language – Specifies preferred languages.
+ Authorization – Carries credentials for authentication.
+ Cookie – Sends stored cookies to the server.
+ DNT (Do Not Track) – Indicates if tracking is disabled (1 = don’t track).
+ Expect – Indicates expected behavior from the server.
+ Forwarded – Identifies originating IP & host through proxies.
+ From – Email address of the user issuing the request.
+ Host – Specifies the requested hostname.
+ If-Match – Only processes the request if ETag matches.
+ If-Modified-Since – Only returns the resource if modified after the given date.
+ If-None-Match – Returns resource only if ETag does not match.
+ If-Range – Returns the full resource or only the missing parts.
+ If-Unmodified-Since – Only returns resource if it hasn't changed since the date.
+ Origin – Identifies the request's source (for CORS).
+ Proxy-Authorization – Authentication for proxy access.
+ Referer – The URL of the previous page that linked to the resource.
+ TE – Indicates supported transfer encodings.
+ User-Agent – Contains details about the client (browser, OS, etc.).