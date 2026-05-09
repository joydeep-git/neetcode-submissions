class Solution {

    public encode(strs: string[]): string {

        let code = "";

        for(let str of strs ) {

            const prefix = str.length + "#";

            code += prefix + str;

        }

        return code;
    }



    public decode(str: string): string[] {

        if(str.length === 0) return [];

        const decoded: string[] = [];

        let i = 0;

        while( i < str.length ) {

            let j = i;

            while ( str[j] !== "#" ) {
                j++;
            }

            let length = Number(str.substring(i, j));

            i = j + 1;

            decoded.push( str.substring(i, i + length) );

            i += length;

        }


        return decoded;

    }
}
