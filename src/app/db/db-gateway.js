export default class DBGateway {
    async _fetchData(path) {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || "";
        const url = `${baseUrl}api/${path}`;
        return await fetch(url).then((response) => response.json());
    }

    async getTunes(subsectionId) {
        return this._fetchData(`tunes/${subsectionId}`);
    }

    async getTune(id, subsectionId) {
        return this._fetchData(`tune/${id}?sub=${subsectionId}`);
    }
}
