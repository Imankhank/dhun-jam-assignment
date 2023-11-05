import React from 'react'

const AccountIcon = ({ height = 30, width = 30, fill = "red" }) => {
    return (
        <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill={fill} d="M22.0049 6H15.0049C11.6912 6 9.00488 8.68629 9.00488 12C9.00488 15.3137 11.6912 18 15.0049 18H22.0049V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V6ZM15.0049 8H23.0049V16H15.0049C12.7957 16 11.0049 14.2091 11.0049 12C11.0049 9.79086 12.7957 8 15.0049 8ZM15.0049 11V13H18.0049V11H15.0049Z"></path></svg>
    )
}

export default AccountIcon