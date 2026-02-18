# Database service — run & diagnostics

This folder contains the small Node.js service that connects to MongoDB Atlas.

Quick run

1. Install dependencies (if needed):

```powershell
cd Database
npm install
```

2. Start the server:

```powershell
cd Database
node server.js
```

Useful diagnostics (PowerShell)

- Check SRV record (DNS):

```powershell
nslookup -type=SRV _mongodb._tcp.cluster0.gr9mo9u.mongodb.net
```

- Check DNS name resolution / reachability:

```powershell
ping cluster0.gr9mo9u.mongodb.net
```

- If SRV lookups are blocked in your network, use the "Standard connection string" from Atlas (without `+srv`) and include the replica hosts/ports.

Notes
- The current `src/config/database.js` uses an Atlas `+srv` URI. If your environment blocks SRV DNS queries or outbound ports, the connection will fail with `querySrv ECONNREFUSED`.
- For debugging, open `src/config/database.js` and confirm the connection string, database name, and that special characters in the password are URL-encoded.

If you want, I can: add a `.catch()` for better logging, or replace the `+srv` URI with a non-SRV connection example — tell me which.
