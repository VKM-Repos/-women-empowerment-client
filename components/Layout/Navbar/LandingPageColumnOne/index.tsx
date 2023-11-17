import React from "react";

import { Button, Img } from "components";

type LandingPageColumnOneProps = Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "communitybutton"
> &
    Partial<{ communitybutton: string }>;

const LandingPageColumnOne: React.FC<LandingPageColumnOneProps> = (props) => {
    return (
        <>
            <div className={props.className}>
                <div className="flex flex-col items-center justify-start w-[88%] md:w-full">
                    <div className="flex flex-row gap-1 items-start justify-start p-2.5 w-auto">
                        <Button
                            className="bg-transparent cursor-pointer font-quicksand leading-[normal] min-w-[100px] text-base text-black-900_c6 text-center"
                            size="xs"
                        >
                            {props?.communitybutton}
                        </Button>
                        <Img
                            className="h-5 w-5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

LandingPageColumnOne.defaultProps = { communitybutton: "Community" };

export default LandingPageColumnOne;
