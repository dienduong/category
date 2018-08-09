class PagedResponseBody {
    constructor(items, totalCount, offset) {
        if (items && items.length) {
            this.items = items
            offset ? this._prevOffset = offset - 1 : this._prevOffset = null
            if (this._prevOffset) {
                totalCount > this._prevOffset + items.length + 1 ? this._nextOffset = this._prevOffset + items.length + 1 : this._nextOffset = null
            } else {
                totalCount > items.length ? this._nextOffset = items.length : this._nextOffset = null
            }
            this._totalCount = totalCount
        } else {
            this.items = []
            this._prevOffset = null
            this._nextOffset = null
            this._totalCount = null
        }
    }
}

export default PagedResponseBody
