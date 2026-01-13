import PositionItem from '../PositionItem/PositionItem.tsx';
import './positionList.scss';
import {useGetProfileInfo} from "@/features/User/useGetProfileInfo.ts";
import clsx from "clsx";
import {useAppSelector} from "@/shared/hooks/redux.ts";

const PositionList = () => {
  const {data:userData} = useGetProfileInfo();
  const leaderboardData = userData?.leaderboard
  const currentUserLeaderBoardData = useAppSelector(state => state.userReducer.leaderboard)

  if(!currentUserLeaderBoardData){
    return (
        <>
          <p>Не удалось получить инофрмацию о пользователе</p>
        </>
    )
  }

  return (
    <>
      <div className='position__items'>
        {leaderboardData?.topUsers.map(({position,fullName,points}) => (
            <div className='position__item' key={position}>
              <div
                  className={clsx('position__item-placement', 'first')}
              >
                {position}
              </div>
              <p className='position__item-info'>
                {fullName}
              </p>
              <p className='position__item-score'>{points} баллов</p>
            </div>
        ))}

        <PositionItem fullName={currentUserLeaderBoardData?.fullName}
                      points={currentUserLeaderBoardData.points}
                      position={currentUserLeaderBoardData.position}/>
      </div>
    </>
  );
};

export default PositionList;
